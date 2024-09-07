import './directory-item.styles';
import { DirectoryItemContainer } from './directory-item.styles';
import { BackgroundImage } from './directory-item.styles';
import { Body } from './directory-item.styles';
import { SecondBody } from './directory-item.styles';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      
      <Body to={`/shop/${title}`}>
        <SecondBody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </SecondBody>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
