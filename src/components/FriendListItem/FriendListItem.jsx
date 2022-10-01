import PropTypes from 'prop-types';
import {
    FriendCard,
    Statys,
    Avatar,
    Name
} from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <FriendCard>
            <Statys isOnline={isOnline}>{isOnline}</Statys>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendCard>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}