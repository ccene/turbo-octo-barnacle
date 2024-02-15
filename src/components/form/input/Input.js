import './input.css';

export const createInput = ({
                                 primary = false,
                                 size = 'medium',
                                 backgroundColor,
                                 id,
                                 type,
                                 onClick,
                                 project,
                             }) => {
    const inp = document.createElement('input');
    inp.type = type;
    inp.name = name;
    inp.id = id;
    inp.addEventListener('click', onClick);


    const mode = primary ? 'inp--primary' : 'inp--secondary';
    inp.className = ['inp', `inp--${size}`, mode].join(' ');

    switch (project) {
        case 'DIG-0':
            break;
        case 'DIG-1':
            inp.setAttribute('asp-for','ViewModel.Potato')
            break;
    }


    return inp;
};
