import { StyleSheet, Text, View, ImageProps, ImageBackground, TouchableOpacity } from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE } from '../theme/theme';

interface ImageBackgroundInfoProps {
    EnableBackHandler: boolean;
    imagelink_portrait: ImageProps;
    type: string;
    id: string;
    favourite: boolean;
    name: string;
    special_ingredient: string;
    ingredients: string;
    average_rating: number;
    ratings_count: string;
    roasted: string;
    BackHandler?: any;
    ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
    EnableBackHandler,
    imagelink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    BackHandler,
    ToggleFavourite,
}) => {
    return (
        <View>
            <ImageBackground source={imagelink_portrait} style={styles.ItemBackgroundImage}>
                {EnableBackHandler ? (
                    <View>
                        <TouchableOpacity>
                            <GradientBGIcon
                                name="left"
                                color={COLORS.primaryLightGreyHex}
                                size={FONTSIZE.size_16}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <></>
                )}
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    ItemBackgroundImage: {
        width: '100%',
        aspectRatio: 20 / 25,
        justifyContent: 'space-between',
    }
});
export default ImageBackgroundInfo;