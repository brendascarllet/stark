import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuickQuoteDialog from './QuickQuoteDialog';

interface QuickQuoteButtonProps {
  /** Pre-select a service in the form (e.g. "skylight" on the Skylights page). */
  defaultService?: string;
  /** Button label */
  label?: string;
  /** Optional override for dialog title */
  dialogTitle?: string;
  /** Style variants */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'stark-red';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'full';
  className?: string;
  /** Render as a sticky bottom-of-screen button on mobile */
  sticky?: boolean;
  children?: React.ReactNode;
}

const QuickQuoteButton: React.FC<QuickQuoteButtonProps> = ({
  defaultService,
  label = 'Get a Free Estimate',
  dialogTitle,
  variant = 'stark-red',
  size = 'lg',
  className = '',
  sticky = false,
  children,
}) => {
  const [open, setOpen] = useState(false);

  if (sticky) {
    return (
      <>
        <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-white/90 backdrop-blur border-t border-gray-200 shadow-lg">
          <Button
            type="button"
            variant={variant}
            size="full"
            onClick={() => setOpen(true)}
            className={className}
          >
            {children || label}
          </Button>
        </div>
        <QuickQuoteDialog
          open={open}
          onOpenChange={setOpen}
          defaultService={defaultService}
          title={dialogTitle}
        />
      </>
    );
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={() => setOpen(true)}
        className={className}
      >
        {children || label}
      </Button>
      <QuickQuoteDialog
        open={open}
        onOpenChange={setOpen}
        defaultService={defaultService}
        title={dialogTitle}
      />
    </>
  );
};

export default QuickQuoteButton;
