import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div className='container flex items-center justify-center h-screen'>
      <div className="flex flex-col items-center gap-4">
        <h4 className='text-[140px] text-[#01579b] font-bold'>404</h4>
        <p className='text-lg leading-[1.33] max-w-[484px] text-[#333] text-center'>
          К сожалению, запрашиваемая вами страница не найдена.
        </p>
        <p className='text-sm leading-[1.43] text-[#333] max-w-[401px] text-center'>
          Неправильно набран адрес или такой страницы на сайте больше не существует.
        </p>
        <button 
          onClick={() => { navigate('/') }} 
          className='font-bold bg-[#01579b] h-[42px] w-[173px] text-[#f4f8fb] text-xs'
        >
          ПЕРЕЙТИ НА ГЛАВНУЮ
        </button>
      </div>
    </div>
  );
};

export default Error404Page;
