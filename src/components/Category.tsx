import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import TravelingIcon from '../../assets/images/traveling.png'
import HealthIcon from '../../assets/images/health.png'
import IncomeIcon from '../../assets/images/income.png'
import CarIcon from '../../assets/images/car.png';
import ArrowUp from '../../assets/images/arrow-up.png';
import ArrowDown from '../../assets/images/arrow-down.png'
function Category({ item, totalSpending }) {

    const value = parseFloat(
        item.amount.replace("NOK", " ").replace(",", "").split(" ")
    );


    const getCategoryIcon = (category) => {
        switch (category) {
            case 'traveling':
                return TravelingIcon;
            case 'health':
                return HealthIcon;
            case 'salary':
                return IncomeIcon;
            case 'car':
                return CarIcon;
            default:
                return TravelingIcon
        }
    }

    const getCategoryName = (category) => {
        switch (category) {
            case 'traveling':
                return 'traveling';
            case 'health':
                return 'health';
            case 'salary':
                return 'income';
            case 'transport':
                return 'transport';
            case 'misc':
                return 'other';
            default:
                return null
        }
    }
    const total = totalSpending.reduce((partialSum, a) => partialSum + a, 0)
    function percentage(percent, total) {
        return ((percent / total) * 100).toFixed(2)
    }

    const percentResult = percentage(value, total);
   
    
    
    
    return (
        <View style={styles.category}>
            <View style={{ flexDirection: 'row', gap: 13, alignItems: 'center' }}>
                <Image
                    style={styles.profile}
                    source={getCategoryIcon(item.category.top)}
                />
                <View>
                    <Text style={styles.categoryName}>{getCategoryName(item.category.top)}</Text>
                    <Text style={styles.bankName}>1 Transaction</Text>
                </View>
            </View>
            <View>
                <Text style={styles.amount}>{Math.abs(value)} kr</Text>
                <View style={styles.percentageWrapper}>
                    <Text style={{...styles.percentage, color: value > 0 ? '#00DB90' : '#EF253D'}}>{percentResult}%</Text>
                    <Image source={value > 0 ? ArrowUp : ArrowDown} ></Image>
                </View>
            </View>
        </View>
    );
}

export default Category;
const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        width: '100%',
    },
    categoryName: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 23,
        color: '#102463',
        textTransform: 'capitalize'
    },
    profile: {
        width: 54,
        height: 54,
    },
    bankName: {
        fontSize: 13,
        lineHeight: 18,
        color: '#2E6CC6',
    },
    amount: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        color: '#102463',
    },
    percentageWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 5
    },
    percentage: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
    },
});
