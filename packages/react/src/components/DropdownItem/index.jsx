import styles from './styles.module.css'

const DropdownItem = ({ href, actived=false, disabled, startIcon, children, endIcon, ...rest }) => {
    return disabled || href == null ?
        <button className={styles.dropdownItem + (actived ? ' ' + styles.selected : '')} disabled={disabled} {...rest}>
            {startIcon}
            <div className={styles.dropdownItemLabel}>{children}</div>
            {endIcon}
        </button>
    :
        <a className={styles.dropdownItem} href={href} {...rest}>
            {startIcon}
            <div className={styles.dropdownItemLabel}>{children}</div>
            {endIcon}
        </a>
}

export default DropdownItem