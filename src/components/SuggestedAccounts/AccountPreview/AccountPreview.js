import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss';
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src='https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png' alt=''></img>
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </header>

            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <strong>in</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('name')}>doilacau_06</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>1m</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>1m</strong>
                    <span className={cx('label')}>Likes</span>
                </p>

            </div>
        </div>
    );
}

export default AccountPreview;