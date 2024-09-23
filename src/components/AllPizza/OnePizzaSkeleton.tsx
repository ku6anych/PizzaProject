import ContentLoader from 'react-content-loader';

const OnePizzaSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={459}
      viewBox="0 0 280 459"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="18" y="7" rx="500" ry="500" width="233" height="241" />
      <rect x="2" y="262" rx="16" ry="16" width="266" height="30" />
      <rect x="3" y="319" rx="42" ry="42" width="280" height="85" />
      <rect x="3" y="429" rx="15" ry="15" width="89" height="29" />
      <rect x="177" y="423" rx="15" ry="15" width="121" height="37" />
    </ContentLoader>
  );
};

export default OnePizzaSkeleton;
