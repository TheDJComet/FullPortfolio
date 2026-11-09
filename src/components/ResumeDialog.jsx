import { Download, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

// Most phones cannot show a PDF inside a page, so they get the buttons alone.
const canPreview = navigator.pdfViewerEnabled

export default function ResumeDialog({ resume, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const close = () => dialogRef.current.close()

  return (
    <dialog
      ref={dialogRef}
      aria-label={resume.label}
      onClose={onClose}
      // A click that lands on the dialog itself is on the backdrop around the panel.
      onClick={(event) => event.target === dialogRef.current && close()}
      className={`m-auto w-[min(56rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-2xl border border-border bg-panel p-0 text-foreground backdrop:bg-black/70 ${canPreview ? 'h-[90dvh] max-h-none' : ''}`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <h2 className="text-lg font-semibold">{resume.label}</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="rounded-md p-1 text-muted-foreground hover:text-foreground"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        {canPreview && (
          <iframe
            src={`${resume.file}#view=FitH`}
            title={`${resume.label} preview`}
            className="min-h-0 w-full flex-1 bg-white"
          />
        )}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border px-5 py-4">
          <Button asChild variant="secondary" size="lg" className="text-base">
            <a href={resume.file} target="_blank" rel="noreferrer">
              Open PDF
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
          <a href={resume.file} download className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-mint">
            <Download aria-hidden="true" className="size-4" />
            Download
          </a>
        </div>
      </div>
    </dialog>
  )
}
