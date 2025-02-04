'use client';

// useFormState: hook that allows us to update state based on the result of the form action
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const initialState = {
  message: '',
};

function FormContainer({ action, children }) {
  //useFormState: form 액션의 결과에 기반하여 상태를 업데이트할 수 있게 해주는 Hook
  //useFormState에 form의 액션 함수와 초기값을 전달하면, form에 사용할 새로운 액션과 최신 state를 반환
  //최신 state는 제공한 함수에도 전달
  // action : form이 제출될 때 호출할 함수
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created');
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
