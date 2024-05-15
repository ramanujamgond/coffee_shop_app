import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store/store';
import { COLORS } from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({ navigation, route }: any) => {
    // console.log('route =', route.params);

    const ItemOfIndex = useStore((state: any) =>
        route.params.type == "Coffee" ? state.CoffeeList : state.BeanList,
    )[route.params.index];

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}
            >
                <ImageBackgroundInfo
                    EnableBackHandler={true}
                    imagelink_portrait={ItemOfIndex.imagelink_portrait}
                    type={ItemOfIndex.type}
                    id={ItemOfIndex.id}
                    favourite={ItemOfIndex.favourite}
                    name={ItemOfIndex.name}
                    special_ingredient={ItemOfIndex.special_ingredient}
                    ingredients={ItemOfIndex.ingredients}
                    average_rating={ItemOfIndex.average_rating}
                    ratings_count={ItemOfIndex.ratings_count}
                    roasted={ItemOfIndex.roasted}
                    BackHandler={() => { }}
                    ToggleFavourite={() => { }}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    }
});
export default DetailsScreen;