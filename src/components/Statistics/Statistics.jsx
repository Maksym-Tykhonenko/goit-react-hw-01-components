import PropTypes from 'prop-types';
import {
  StatBlock,
  StatTitle,
  StatList,
  StatItem,
  StatItemLable,
  StatItemPercentage
} from './Statistics.style'

export const Statistics = ({ title, stats }) => {
  return (
    <StatBlock>
      {title !== undefined && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem id={id} key={id}>
              <StatItemLable>{label}</StatItemLable>
              <StatItemPercentage>{percentage}%</StatItemPercentage>
            </StatItem>
          )
        })}
        
      </StatList>
    </StatBlock>
  )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};
