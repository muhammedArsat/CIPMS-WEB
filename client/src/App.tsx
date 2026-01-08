import { useState } from "react";
import { Modal } from "./components/ui/Modal";
import ModalBody from "./components/ui/ModalBody";
import ModalFooter from "./components/ui/ModalFooter";
import ModalHeader from "./components/ui/ModalHeader";
import Button from "./components/ui/Button";
import { X } from "lucide-react";

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} size="sm">
        <ModalHeader>
          <div className="flex justify-between items-center">
            <p>Delete Internship ?</p>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>
        </ModalHeader>

        <ModalBody>Are you sure you want to delete this internship?</ModalBody>

        <ModalFooter>
          <div className="flex  w-full space-x-2">
            <Button variant="primary" onClick={() => setOpen(false)} className="basis-1/2">
              Cancel
            </Button>
            <Button variant="danger" className="basis-1/2">Confirm</Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default App;
