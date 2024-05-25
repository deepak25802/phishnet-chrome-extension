interface CustomButtonProps {
  type: string;
  text: string;
  onClick: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  let bg: string = '';
  let textColor: string = '';

  if (props.type === 'white') {
    bg = ' bg-white';
    textColor = ' text-black';
  } else if (props.type === 'red') {
    bg = ' bg-red-600';
    textColor = ' text-white';
  }

  return (
    <button className={`font-semibold rounded-lg m-3 p-2 px-6 md:col-span-1 col-span-2 max-w-sm` + bg + textColor} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default CustomButton;
