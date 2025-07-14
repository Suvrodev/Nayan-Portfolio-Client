import DeleteButton from "../DeleteButton/DeleteButton";
import UpdateButton from "../UpdateButton/UpdateButton";

const AdminActionButtons = () => {
  return (
    <div className="flex gap-2">
      <UpdateButton />
      <DeleteButton />
    </div>
  );
};

export default AdminActionButtons;
