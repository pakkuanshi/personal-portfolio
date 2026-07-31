"use client";

import { ChangeEvent, FormEvent, useEffect, useId, useState } from "react";

type ResumeModalCopy = {
  title: string;
  description: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  loadingLabel: string;
  successMessage: string;
  successDetail: string;
  invalidEmailMessage: string;
  errorMessage: string;
  closeLabel: string;
};

type ResumeModalProps = {
  copy: ResumeModalCopy;
  isOpen: boolean;
  onClose: () => void;
  resumeHref: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ResumeModal({
  copy,
  isOpen,
  onClose,
  resumeHref,
}: ResumeModalProps) {
  const descriptionId = useId();
  const emailId = useId();
  const firstNameId = useId();
  const lastNameId = useId();
  const titleId = useId();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState(copy.errorMessage);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setStatus("idle");
    setErrorMessage(copy.errorMessage);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [copy.errorMessage, isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const resetError = () => {
    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage(copy.errorMessage);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    resetError();
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    resetError();
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    resetError();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage(copy.invalidEmailMessage);
      setStatus("error");
      return;
    }

    const resumeWindow = window.open("about:blank", "_blank");

    if (resumeWindow) {
      resumeWindow.opener = null;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-resume", {
        body: JSON.stringify({
          email: trimmedEmail,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(copy.errorMessage);
      }

      const data = (await response.json().catch(() => null)) as {
        resumeUrl?: string;
      } | null;
      const resumeUrl = data?.resumeUrl ?? resumeHref;
      const absoluteResumeUrl = new URL(resumeUrl, window.location.origin).toString();

      if (resumeWindow) {
        resumeWindow.location.href = absoluteResumeUrl;
      } else {
        window.open(absoluteResumeUrl, "_blank", "noopener,noreferrer");
      }

      setEmail("");
      setFirstName("");
      setLastName("");
      setStatus("success");
    } catch {
      resumeWindow?.close();
      setErrorMessage(copy.errorMessage);
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <div className="resume-modal-layer">
      <button
        aria-label={copy.closeLabel}
        className="resume-modal-backdrop"
        onClick={onClose}
        type="button"
      />

      <section
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="resume-modal-panel"
        role="dialog"
      >
        <button
          aria-label={copy.closeLabel}
          className="resume-modal-close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <div className="resume-modal-copy">
          <h2 className="resume-modal-title" id={titleId}>
            {copy.title}
          </h2>
          <p className="resume-modal-description" id={descriptionId}>
            {copy.description}
          </p>
        </div>

        {isSuccess ? (
          <p className="resume-modal-success" role="status">
            <span>{copy.successMessage}</span>
            <span className="resume-modal-success-detail">
              {copy.successDetail}
            </span>
          </p>
        ) : (
          <form className="resume-modal-form" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="resume-modal-label" htmlFor={firstNameId}>
                  {copy.firstNameLabel}
                </label>
                <input
                  autoComplete="given-name"
                  className="resume-modal-input"
                  disabled={isLoading}
                  id={firstNameId}
                  onChange={handleFirstNameChange}
                  placeholder={copy.firstNamePlaceholder}
                  type="text"
                  value={firstName}
                />
              </div>

              <div className="grid gap-2">
                <label className="resume-modal-label" htmlFor={lastNameId}>
                  {copy.lastNameLabel}
                </label>
                <input
                  autoComplete="family-name"
                  className="resume-modal-input"
                  disabled={isLoading}
                  id={lastNameId}
                  onChange={handleLastNameChange}
                  placeholder={copy.lastNamePlaceholder}
                  type="text"
                  value={lastName}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="resume-modal-label" htmlFor={emailId}>
                {copy.emailLabel}
              </label>
              <input
                autoComplete="email"
                className="resume-modal-input"
                disabled={isLoading}
                id={emailId}
                inputMode="email"
                onChange={handleEmailChange}
                placeholder={copy.emailPlaceholder}
                required
                type="email"
                value={email}
              />
            </div>

            <button
              aria-busy={isLoading}
              className="resume-modal-submit"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? copy.loadingLabel : copy.submitLabel}
            </button>
          </form>
        )}

        {status === "error" ? (
          <p className="resume-modal-error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </section>
    </div>
  );
}
