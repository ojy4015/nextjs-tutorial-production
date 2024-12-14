// 'use server';
import { createTask } from '@/utils/actions';

import { revalidatePath } from 'next/cache';

// export const createTask = async (formData) => {
//   'use server';
//   const content = formData.get('content');
//   console.log(content);
//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   revalidatePath('/tasks');
// };

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mt-10">
        <input
          type="text "
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
