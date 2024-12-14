// 'use client';
// import { createTaskCustom } from '@/utils/actions';
// import { useEffect } from 'react';

// import { useFormStatus, useFormState } from 'react-dom';
// import toast from 'react-hot-toast';

// const SubmitBtn = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       type='submit'
//       className='btn btn-primary join-item'
//       disabled={pending}
//     >
//       {pending ? 'please wait...' : 'create task'}
//     </button>
//   );
// };

// const initialState = {
//   message: null,
// };

// const TaskForm = () => {
//   const [state, formAction] = useFormState(createTaskCustom, initialState);
//   useEffect(() => {
//     if (state.message === 'error') {
//       toast.error('there was an error');
//       return;
//     }
//     if (state.message) {
//       toast.success('task created');
//     }
//   }, [state]);
//   return (
//     <form action={formAction}>
//       {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
//       <div className='join w-full'>
//         <input
//           type='text '
//           className='input input-bordered join-item w-full'
//           placeholder='type here'
//           name='content'
//           required
//         />
//         <SubmitBtn />
//       </div>
//     </form>
//   );
// };
// export default TaskForm;
//-------------------------------------------------------------

// 'use client';
// import { createTaskCustom } from '@/utils/actions';
// // useFormState: hook that allows us to update state based on the result of the form action
// import { useFormStatus, useFormState } from 'react-dom';
// import { useEffect } from 'react';
// import toast from 'react-hot-toast';

// const initialState = {
//   message: null,
// };

// const SubmitBtn = () => {
//   //useFormStatus: hook that provides the status info of the last submission
//   const { pending } = useFormStatus();
//   return (
//     <button
//       type="submit"
//       className="btn btn-primary join-item"
//       disabled={pending}
//     >
//       {pending ? 'Please wait ...' : 'create task'}
//     </button>
//   );
// };

// const TaskFormCustom = () => {
//   const [state, formAction] = useFormState(createTaskCustom, initialState);

//   // useEffect(() => {
//   //   if (state.message) {
//   //     toast(state.message);
//   //   }
//   // }, [state]);
//   useEffect(() => {
//     if (state.message === 'error') {
//       toast.error('there was an error');
//       return;
//     }
//     if (state.message) {
//       toast.success('task created');
//     }
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
//       <div className="join w-full mt-10">
//         <input
//           type="text "
//           className="input input-bordered join-item w-full"
//           placeholder="type here"
//           name="content"
//           required
//         />
//         <SubmitBtn />
//       </div>
//     </form>
//   );
// };
// export default TaskFormCustom;

//----------------------------------------------------------
import { createTaskCustom } from '@/utils/actions';
import FormContainer from './FormContainer';
import { SubmitBtn } from './Buttons';

const TaskFormCustom = () => {
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold mb-8 capitalize">
        Todo 만들기
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">일반 정보</h3>
        <FormContainer action={createTaskCustom}>
          <div className="join w-full mt-10">
            <input
              type="text "
              className="input input-bordered join-item w-full"
              placeholder="type here"
              name="content"
              required
            />
            <SubmitBtn text="만들기" />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};
export default TaskFormCustom;

//--------------------------------------------------------

// 'use client';
// import { createTaskCustom } from '@/utils/actions';
// import { useEffect } from 'react';

// import { useFormStatus, useFormState } from 'react-dom';
// import toast from 'react-hot-toast';

// const SubmitBtn = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       type='submit'
//       className='btn btn-primary join-item'
//       disabled={pending}
//     >
//       {pending ? 'please wait...' : 'create task'}
//     </button>
//   );
// };

// const initialState = {
//   message: null,
// };

// const TaskForm = () => {
//   const [state, formAction] = useFormState(createTaskCustom, initialState);
//   useEffect(() => {
//     if (state.message === 'error') {
//       toast.error('there was an error');
//       return;
//     }
//     if (state.message) {
//       toast.success('task created');
//     }
//   }, [state]);
//   return (
//     <form action={formAction}>
//       {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
//       <div className='join w-full'>
//         <input
//           type='text '
//           className='input input-bordered join-item w-full'
//           placeholder='type here'
//           name='content'
//           required
//         />
//         <SubmitBtn />
//       </div>
//     </form>
//   );
// };
// export default TaskForm;
