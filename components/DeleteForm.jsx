// 'use client';
// import { deleteTask } from '@/utils/actions';
// import { useFormStatus } from 'react-dom';

// const SubmitButton = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button className="btn btn-xs btn-error" disabled={pending}>
//       {pending ? 'pending...' : 'delete'}
//     </button>
//   );
// };

// const DeleteForm = ({ id }) => {
//   return (
//     <form action={deleteTask}>
//       <input type="hidden" name="id" value={id} />
//       {/* <button className="btn btn-error btn-xs">delete</button> */}
//       <SubmitButton />
//     </form>
//   );
// };
// export default DeleteForm;

//---------------------------------------------------

import { deleteTask } from '@/utils/actions';
import FormContainer from './FormContainer';
import { SubmitBtn } from './Buttons';

const DeleteForm = ({ id }) => {
  return (
    <FormContainer action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <div className="label-text cursor-pointer">
        <SubmitBtn text="삭제" />
      </div>
    </FormContainer>
  );
};
export default DeleteForm;
