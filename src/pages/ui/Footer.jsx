export default function Footer() {
  return (
    <footer className='border-t border-neutral-800 p-4 lg:p-6'>
      <p className='text-paragraph/80 text-center lg:text-lg'>
        &copy; Copyright {new Date().getFullYear()}. Designed and Developed by{' '}
        <a
          href='https://www.linkedin.com/in/yusuf-oyinlola'
          target='_blank'
          className='text-theme/70'
        >
          Yusuf Oyinlola
        </a>
      </p>
    </footer>
  );
}
