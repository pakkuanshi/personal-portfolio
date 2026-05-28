"use client";

import { ChangeEvent, FormEvent, useEffect, useId, useState } from "react";

type ResumeLanguage = "en" | "cn";

type ResumeRequestCopy = {
  title: string;
  versionPrompt: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  resumeVersions: {
    id: ResumeLanguage;
    label: string;
  }[];
  submitLabel: string;
  loadingLabel: string;
  successMessage: string;
  successDetail: string;
  errorMessage: string;
  closeLabel: string;
};

type ResumeRequestModalProps = {
  copy: ResumeRequestCopy;
  isOpen: boolean;
  onClose: () => void;
};

export function ResumeRequestModal({
  copy,
  isOpen,
  onClose,
}: ResumeRequestModalProps) {
  const descriptionId = useId();
  const emailId = useId();
  const titleId = useId();
  const versionGroupId = useId();
  const [email, setEmail] = useState("");
  const [selectedVersion, setSelectedVersion] = useState<ResumeLanguage>(
    copy.resumeVersions[0]?.id ?? "en",
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState(copy.errorMessage);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setStatus("idle");
    setErrorMessage(copy.errorMessage);
    setSelectedVersion(copy.resumeVersions[0]?.id ?? "en");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [copy.errorMessage, copy.resumeVersions, isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage(copy.errorMessage);
    }
  };

  const handleVersionChange = (version: ResumeLanguage) => {
    setSelectedVersion(version);
    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage(copy.errorMessage);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-resume", {
        body: JSON.stringify({
          email: trimmedEmail,
          resumeLanguage: selectedVersion,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? copy.errorMessage);
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : copy.errorMessage);
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

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
          <p className="resume-modal-version-title" id={versionGroupId}>
            {copy.versionPrompt}
          </p>
          <p className="resume-modal-description" id={descriptionId}>
            {copy.description}
          </p>
        </div>

        <form className="resume-modal-form" onSubmit={handleSubmit}>
          <div
            aria-labelledby={versionGroupId}
            className="resume-modal-version-group"
            role="radiogroup"
          >
            {copy.resumeVersions.map((version) => (
              <label className="resume-modal-version-option" key={version.id}>
                <input
                  checked={selectedVersion === version.id}
                  disabled={isLoading}
                  name="resume-version"
                  onChange={() => handleVersionChange(version.id)}
                  type="radio"
                  value={version.id}
                />
                <span>{version.label}</span>
              </label>
            ))}
          </div>

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
          <button
            aria-busy={isLoading}
            className="resume-modal-submit"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? copy.loadingLabel : copy.submitLabel}
          </button>
        </form>

        {status === "success" ? (
          <p className="resume-modal-success" role="status">
            <span>{copy.successMessage}</span>
            <span className="resume-modal-success-detail">
              {copy.successDetail}
            </span>
          </p>
        ) : null}

        {status === "error" ? (
          <p className="resume-modal-error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </section>
    </div>
  );
}
