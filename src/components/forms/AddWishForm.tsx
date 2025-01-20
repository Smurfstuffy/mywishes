import {useAppDispatch} from '../../hooks/useRedux';
import {addWish} from '../../store/slices/wishes/addWish';
import {SubmitHandler, useForm} from 'react-hook-form';

interface FormFields {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const AddWishForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormFields>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(
      addWish({
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body,
      }),
    );
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('userId', {
          required: 'userId is requierd',
        })}
        type="text"
        placeholder="userId"
      />
      {errors.userId && (
        <span className="text-red-500">{errors.userId.message}</span>
      )}
      <input
        {...register('id', {required: 'id is requierd'})}
        type="text"
        placeholder="id"
      />
      {errors.id && <span className="text-red-500">{errors.id.message}</span>}
      <input
        {...register('title', {required: 'title is requierd'})}
        type="text"
        placeholder="title"
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}
      <input
        {...register('body', {required: 'body is requierd'})}
        type="text"
        placeholder="body"
      />
      {errors.body && (
        <span className="text-red-500">{errors.body.message}</span>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default AddWishForm;
