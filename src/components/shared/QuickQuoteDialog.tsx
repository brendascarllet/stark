import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import QuickQuoteForm from './QuickQuoteForm';

interface QuickQuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  title?: string;
  description?: string;
}

/**
 * Responsive lead-capture container.
 * - Mobile (<768px): bottom drawer (vaul) — feels native, doesn't cover the whole screen.
 * - Desktop:         centered modal (radix Dialog).
 */
const QuickQuoteDialog: React.FC<QuickQuoteDialogProps> = ({
  open,
  onOpenChange,
  defaultService,
  title = 'Get a Free Estimate',
  description = "60 seconds. We'll text you back fast.",
}) => {
  const isMobile = useIsMobile();
  const handleSuccess = () => onOpenChange(false);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="max-h-[92vh]">
          <DrawerHeader className="text-left flex-shrink-0">
            <DrawerTitle className="text-navy">{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {/* Form scrolls inside the drawer naturally */}
          <div className="overflow-y-auto overscroll-contain">
            <QuickQuoteForm defaultService={defaultService} onSuccess={handleSuccess} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* DialogContent itself scrolls when form content exceeds 90vh */}
      <DialogContent className="max-w-lg p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="px-6 pt-6 pb-2 sticky top-0 bg-white z-10 border-b border-gray-100">
          <DialogTitle className="text-navy text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <QuickQuoteForm defaultService={defaultService} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default QuickQuoteDialog;
