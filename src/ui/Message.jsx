export default function Message({ text }) {
  return (
    <div className='flex size-full items-center justify-center p-3'>
      <p className='text-paragraph text-sm font-semibold lg:text-base'>
        {text}
      </p>
    </div>
  );
}
