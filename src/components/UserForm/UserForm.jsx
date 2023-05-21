import { useForm } from "react-hook-form";
import "./UserForm.css"
const UserForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if(initialData) onSend({id: initialData, ...data});
    else onSend(data);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="user-form__title">{initialData ? "Edit user" : "New user"}</h2>

          <button type="button" className="user-form__close-btn"
          onClick={() => onClose()}>
            <span className="material-symbols-outlined">Cancel</span>
          </button>

          <div className="user-form__inputs">
            <div className="user-form__input-container">
              <label htmlFor="nameId" className="user-form__label">
                First Name
              </label>
              <input className="user-form__input" type="text" placeholder="John" id="nameId" {...register("first_name")} />
            </div>

            <div className="user-form__input-container">
              <label htmlFor="LastNameId" className="user-form__label">
                Last name
              </label>
              <input className="user-form__input" type="text" placeholder="Smith" id="LastNameId" {...register("last_name")} />
            </div>

            <div className="user-form__input-container">
              <label htmlFor="emailId" className="user-form__label">
                Email
              </label>
              <input className="user-form__input" type="email" placeholder="example@mail.com" id="emailId" {...register("email")} />
            </div>

            <div className="user-form__input-container">
              <label htmlFor="passwordId" className="user-form__label">
                Password
              </label>
              <input className="user-form__input" type="password" placeholder="xxxxx" id="passwordId" {...register("password")} />
            </div>

            <div className="user-form__input-container">
              <label htmlFor="birthdayId" className="user-form__label">
                Birthday
              </label>
              <input className="user-form__input" type="date" id="birthdayId" {...register("birthday")} />
            </div>
          </div>

          <button type="submit" className='user-form__submit'>{initialData ? "Save changes" : "Add new user"}</button>
        </form>
  )
}

export default UserForm