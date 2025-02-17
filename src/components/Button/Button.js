import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {


    const handleClick = (event) => {
        event.preventDefault(); 
        
        console.log('SUMMARY');
        console.log('=======================');
        console.log(`Name: ${props.name}`);
        console.log(`Price: ${props.basePrice}`);
        console.log(`Size: ${props.size}`);
        console.log(`Color: ${props.color}`);
      };



    return (<button 
        className={clsx(styles.button, props.className)}
        onClick={handleClick}
        >{props.children}</button>);
};

export default Button;