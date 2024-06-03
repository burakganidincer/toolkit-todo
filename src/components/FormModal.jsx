import { Modal, Button, Form } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //formData class ından örnek oluştur
    const formData = new FormData(e.target);

    //formdaki inputların verisini objeye çeviriyoruz
    const taskData = Object.fromEntries(formData.entries());

    //güncellenicek eleman varsa
    if (editItem) {
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      //yoksa reducer'a veri ekleneceğini haber ver

      dispatch(addTask(task));
    }

    //modalı kapat
    handleClose();
  };

  return (
    <div>
      <Modal className="text-black" show={isOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Görev Tanımı</Form.Label>
              <Form.Control
                defaultValue={editItem?.title}
                name="title"
                placeholder="Footer'ı düzenle"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>İsminiz</Form.Label>
              <Form.Control
                defaultValue={editItem?.author}
                name="author"
                placeholder="örn: Ahmet"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Oluşturan</Form.Label>
              <Form.Control
                defaultValue={editItem?.assigned_to}
                name="assigned_to"
                placeholder="örn: Mehmet"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Son Teslim Tarihi</Form.Label>
              <Form.Control
                defaultValue={editItem?.end_date}
                name="end_date"
                type="date"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                İptal
              </Button>
              <Button type="submit" variant="primary">
                {editItem ? "Kaydet" : "Oluştur"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;
