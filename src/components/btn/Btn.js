import './btn.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type,
  onClick,
  project,
}) => {
  const btn = document.createElement('button');
  btn.type = type;
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  

  const mode = primary ? 'btn--primary' : 'btn--secondary';
  btn.className = ['btn', `btn--${size}`, mode].join(' ');

  switch (project) {
    case 'DIG-0':
      break;
    case 'DIG-1':
      btn.setAttribute('asp-for','ViewModel.Potato')
      break;
  }


  return btn;
};
