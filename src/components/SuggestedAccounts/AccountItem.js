import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png'
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('username')}>
                            <strong>in</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </h4>
                        <p className={cx('name')}>doilacau_06</p>
                    </div>

                </div>
            </Tippy>
        </div>
    );
}

AccountItem.protoTypes = {

}

export default AccountItem;