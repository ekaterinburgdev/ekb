import { ReactNode, useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { SheetDetent } from 'react-modal-sheet/dist/types';
import './sheetModal.css';

export interface SheetModalProps {
  snapPoints?: number[];
  fullHeight?: boolean;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: VoidFunction;
}

export function SheetModal({
  children,
  isOpen = false,
  onClose,
  fullHeight,
  snapPoints,
}: SheetModalProps) {
  const ref = useRef<SheetRef>();

  const fullHeightProps = fullHeight
    ? {
        detent: 'full-height' as SheetDetent,
      }
    : {};

  const closeProps = onClose
    ? { onClose }
    : { onClose: () => ref.current?.snapTo(1) };

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      snapPoints={snapPoints}
      {...fullHeightProps}
      {...closeProps}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
