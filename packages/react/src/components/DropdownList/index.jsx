import styles from './styles.module.css'

const DropdownList = ({ children }) => {
    return (
        <div className={styles.dropdownList}>
            {children}
        </div>
    )
}

export default DropdownList