import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";

import { SOCIAL_BUTTON_SIZE } from '../../const';

const SocialShare = ({ url, title}) => (
    <Stack direction="row" spacing={1}>
        <FacebookShareButton url={url}>
            <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
        </FacebookShareButton>

        <TwitterShareButton
            url={url}
            title={title}
        >
            <TwitterIcon size={SOCIAL_BUTTON_SIZE} round />
        </TwitterShareButton>
    </Stack>
);

SocialShare.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}

export default SocialShare;