// components/Form/ConfirmationDialog.tsx
import * as Dialog from "@radix-ui/react-dialog";

const ConfirmationDialog = ({ open, onClose, data }: any) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Overlay className="overlay" />
      <Dialog.Content className="content">
        <h2 className="text-xl">Xác nhận thông tin</h2>
        <div className="space-y-2">
          <p>
            <strong>Họ và tên:</strong> {data.name}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {data.phone}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          {/* Render other data */}
        </div>
        <Dialog.Close className="btn">Đóng</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ConfirmationDialog;
