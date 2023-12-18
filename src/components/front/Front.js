import './front.scss';
import frontImage from '../../assets/front-img.jpg';
import profileImage from '../../assets/profile-img.jpg';

const Front = () => {
    return (  
        <div className="front">
            <img src={frontImage} alt="front image" />
            <img src={profileImage} alt="profile image" />
        </div>
    );
}
 
export default Front;