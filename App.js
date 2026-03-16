import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeTabs'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FEFAF6" />
      
      
      <TouchableOpacity 
        style={styles.splashContent} 
        activeOpacity={1} 
        onPress={() => navigation.replace('HomeTabs')}
      >
        <Image 
          source={require('./assets/Mask Group 2.png')} 
          style={styles.splashImage} 
          resizeMode="contain"
        />
        
        <Text style={styles.splashTitle}>Scan, Pay & Enjoy!</Text>
        
        <Text style={styles.splashDesc}>
          scan products you want to buy at your{"\n"}
          favorite store and pay by your phone &{"\n"}
          enjoy happy, friendly Shopping!
        </Text>

        <View style={styles.dotsContainer}>
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 60) / 2;

const GridItem = ({ iconColor, title, subtitle, imageSource, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.iconPlaceholderContainer, { backgroundColor: iconColor + '1A' }]}>
      <Image source={imageSource} style={styles.realIcon} resizeMode="contain" />
    </View>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

const DummyScreen = () => <View style={{ flex: 1, backgroundColor: '#F9F9FB' }} />;

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello 👋</Text>
            <Text style={styles.nameText}>Christie Doe</Text>
          </View>
          <View style={styles.avatarBorder}>
          <Image source={require('./assets/Mask Group.png')} style={styles.avatar} />
          </View>
        </View>

        <Text style={styles.insightsText}>Your Insights</Text>

        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            <GridItem 
              iconColor="#A396FF" 
              title="Scan new" 
              subtitle="Scanned 483" 
              imageSource={require('./assets/Group 151.png')} 
              onPress={() => navigation.navigate('Scan')} 
            />
            <GridItem 
              iconColor="#FF834E" 
              title="Counterfeits" 
              subtitle="Counterfeited 32" 
              imageSource={require('./assets/Frame.png')} 
            />
          </View>
          <View style={styles.gridRow}>
            <GridItem 
              iconColor="#34D399" 
              title="Success" 
              subtitle="Checkouts 8" 
              imageSource={require('./assets/Group 158.png')} 
            />
            <GridItem 
              iconColor="#60A5FA" 
              title="Directory" 
              subtitle="History 26" 
              imageSource={require('./assets/Group 157.png')} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.scanContainer}>
      <Image 
        source={require('./assets/Juice.jpg')} 
        style={styles.bottleBackground}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.backButtonSafeArea}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#5B66F9" />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.scannerFrame}>
         <View style={[styles.corner, styles.topLeft]} />
         <View style={[styles.corner, styles.topRight]} />
         <View style={[styles.corner, styles.bottomLeft]} />
         <View style={[styles.corner, styles.bottomRight]} />
      </View>

      <View style={styles.bottomCardContainer}>
        <View style={styles.bottomCard}>
          <View style={styles.cardInfo}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100'}} 
              style={styles.cardImage} 
            />
            <View>
              <Text style={styles.cardBrand}>Lauren's</Text>
              <Text style={styles.cardTitle}>Orange Juice</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#F28C5B" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.cartTitle}>Your Cart 👍</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 20}}>
        <View style={styles.cartCard}>
          <Image source={require('./assets/Rectangle 31.png')} style={styles.cartImg} />
          <View style={{flex: 1}}>
            <Text style={styles.cartBrand}>Lauren's</Text>
            <Text style={styles.cartItemTitle}>Orange Juice</Text>
            <Text style={styles.cartPrice}>₹ 149</Text>
          </View>
          <View style={styles.stepper}>
            <Text style={styles.stepperBtn}>-</Text>
            <Text style={styles.stepperNum}>2</Text>
            <Text style={styles.stepperBtn}>+</Text>
          </View>
        </View>

        <View style={styles.cartCard}>
          <Image source={require('./assets/Rectangle 32.png')} style={styles.cartImg} />
          <View style={{flex: 1}}>
            <Text style={styles.cartBrand}>Baskin's</Text>
            <Text style={styles.cartItemTitle}>Skimmed Milk</Text>
            <Text style={styles.cartPrice}>₹ 129</Text>
          </View>
          <View style={styles.stepper}>
            <Text style={styles.stepperBtn}>-</Text>
            <Text style={styles.stepperNum}>2</Text>
            <Text style={styles.stepperBtn}>+</Text>
          </View>
        </View>

        <View style={styles.cartCard}>
          <Image source={require('./assets/Rectangle 45.png')} style={styles.cartImg} />
          <View style={{flex: 1}}>
            <Text style={styles.cartBrand}>Baskin's</Text>
            <Text style={styles.cartItemTitle}>Skimmed Milk</Text>
            <Text style={styles.cartPrice}>₹ 1249</Text>
          </View>
          <View style={styles.stepper}>
            <Text style={styles.stepperBtn}>-</Text>
            <Text style={styles.stepperNum}>2</Text>
            <Text style={styles.stepperBtn}>+</Text>
          </View>
        </View>


        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>₹ 1,527</Text>
        </View>

        <TouchableOpacity 
          style={styles.checkoutBtn} 
          onPress={() => navigation.navigate('PaymentScreen')}
        >
          <Text style={styles.checkoutBtnText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const PaymentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.paymentContainer}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#34D399" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.checkoutHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.checkoutTitle}>Checkout</Text>
            <Ionicons name="card" size={24} color="#E5D08F" style={{marginLeft: 10}} />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.amountText}>₹ 1,527</Text>
            <Text style={styles.gstText}>Including GST (18%)</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabBtn, styles.tabActive]}>
            <Ionicons name="card-outline" size={20} color="white" />
            <Text style={styles.tabActiveText}>Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <Ionicons name="logo-apple" size={20} color="#333" />
            <Text style={styles.tabInactiveText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Card number</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="5261  4141  0151  8472" keyboardType="numeric" placeholderTextColor="#6F7782" />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    source={require('./assets/Master Card Logo.png')} 
                    // Logo thẻ thường hình chữ nhật nên Đại ca để width to hơn height xíu
                    style={{width: 36, height: 24, marginRight: 10}} 
                    resizeMode="contain" 
                />
                
                {/* Thay thế Icon Scan bằng ảnh Local */}
                <Image 
                    source={require('./assets/Card Icon (1).png')} 
                    style={{width: 24, height: 24}} 
                    resizeMode="contain" 
                />
            </View>
          </View>

          <Text style={styles.inputLabel}>Cardholder name</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Christie Doe" placeholderTextColor="#6F7782" />
          </View>

          <View style={styles.rowInputs}>
            <View style={{flex: 1, marginRight: 10}}>
              <Text style={styles.inputLabel}>Expiry date</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="06  /  2024" placeholderTextColor="#6F7782" />
              </View>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                  <Text style={[styles.inputLabel, {marginBottom: 0, marginRight: 5}]}>CVV / CVC</Text>
                  <Ionicons name="help-circle" size={16} color="#34D399" opacity={0.5} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="915" secureTextEntry keyboardType="numeric" placeholderTextColor="#6F7782" />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.footerNote}>We will send you an order details to your{"\n"}email after the successfull payment</Text>

        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('SuccessScreen')}>
          <Ionicons name="lock-closed" size={18} color="white" />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};


const SuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.successContainer}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('HomeTabs')}>
        <Ionicons name="chevron-back" size={24} color="#5B66F9" />
      </TouchableOpacity>

      <View style={styles.successContent}>
        <Image 
          source={require('./assets/Group 167.png')} 
          style={styles.successImage} 
          resizeMode="contain"
        />
        <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
        
        <Text style={styles.successDesc}>
          we will send order details and invoice in{"\n"}
          your contact no. and registered email
        </Text>
        
        <TouchableOpacity style={styles.checkDetailsBtn}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={18} color="#5B66F9" style={{marginLeft: 5}} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.downloadButton} onPress={() => navigation.navigate('HomeTabs')}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: { height: 70, borderTopLeftRadius: 24, borderTopRightRadius: 24, position: 'absolute' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? '#60A5FA' : '#C1C7D0';

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Notif') iconName = 'notifications-outline';
          else if (route.name === 'History') iconName = 'time-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          
          if (route.name === 'Scan') {
            return (
               <View style={styles.scanTabBtn}>
                 <Ionicons name="scan-outline" size={28} color="#FF6B6B" />
               </View>
            );
          }
          return <Ionicons name={iconName} size={28} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notif" component={DummyScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={DummyScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="HomeTabs" component={BottomTabs} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9FB' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  helloText: { fontSize: 24, color: '#333', marginBottom: 5 },
  nameText: { fontSize: 28, color: '#333', fontWeight: 'bold' },
  avatarBorder: { padding: 2, borderRadius: 50, borderWidth: 1, borderColor: '#E6E8EB' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  insightsText: { fontSize: 20, color: '#333', marginBottom: 20, fontWeight: 'bold' },
  gridContainer: { flexDirection: 'column' },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  itemContainer: { backgroundColor: '#FFF', width: itemWidth, borderRadius: 24, padding: 20, alignItems: 'center' },
  iconPlaceholderContainer: { width: 60, height: 60, borderRadius: 16, marginBottom: 20, justifyContent: 'center', alignItems: 'center' },
  realIcon: { width: 28, height: 28 }, 
  itemTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  itemSubtitle: { fontSize: 14, color: '#A0A7B1' },

  scanTabBtn: { width: 50, height: 50, borderWidth: 2, borderColor: '#FF6B6B', borderRadius: 16, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' },

  cartHeader: { paddingHorizontal: 20, paddingTop: 10 },
  backBtn: { width: 45, height: 45, backgroundColor: '#FFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', elevation: 2 },
  cartTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', paddingHorizontal: 20, marginTop: 20, marginBottom: 20 },
  cartCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 20, padding: 15, marginBottom: 15, alignItems: 'center' },
  cartImg: { width: 50, height: 60, borderRadius: 10, marginRight: 15 },
  cartBrand: { fontSize: 12, color: '#A0A7B1' },
  cartItemTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginVertical: 4 },
  cartPrice: { fontSize: 16, color: '#F28C5B', fontWeight: 'bold' },
  stepper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9FB', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4 },
  stepperBtn: { fontSize: 18, color: '#F28C5B', paddingHorizontal: 8 },
  stepperNum: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 5 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 20 },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  totalAmount: { fontSize: 24, fontWeight: 'bold', color: '#F28C5B' },
  checkoutBtn: { backgroundColor: '#F28C5B', height: 60, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  checkoutBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },

  paymentContainer: { flex: 1, backgroundColor: '#FAFAFC', paddingHorizontal: 20 },
  backBtn: { width: 45, height: 45, backgroundColor: '#FFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  checkoutHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  checkoutTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  amountText: { fontSize: 24, fontWeight: 'bold', color: '#34D399' }, // Xanh lá
  gstText: { fontSize: 12, color: '#A0A7B1', marginTop: 2 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 5, marginBottom: 25 },
  tabBtn: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 12 },
  tabActive: { backgroundColor: '#34D399' }, // Nền xanh lá
  tabActiveText: { color: 'white', fontWeight: 'bold', marginLeft: 8, fontSize: 16 },
  tabInactiveText: { color: '#333', fontWeight: 'bold', marginLeft: 8, fontSize: 16 },
  formContainer: { marginBottom: 10 },
  inputLabel: { fontSize: 14, color: '#333', fontWeight: 'bold', marginBottom: 10 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF', borderRadius: 16, paddingHorizontal: 15, height: 60, marginBottom: 20 },
  input: { flex: 1, fontSize: 16, color: '#333' },
  rowInputs: { flexDirection: 'row', justifyContent: 'space-between' },
  footerNote: { textAlign: 'center', color: '#A0A7B1', fontSize: 12, marginBottom: 20, lineHeight: 18 },
  payButton: { backgroundColor: '#34D399', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 16, marginBottom: 40 },
  payButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },

  successContainer: { flex: 1, backgroundColor: '#FAFAFC', paddingHorizontal: 20 },
  successContent: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -50 }, // Đẩy lên 1 tí cho cân đối với nút Back
  successImage: { width: 220, height: 220, marginBottom: 30 },
  successTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  successDesc: { textAlign: 'center', color: '#A0A7B1', fontSize: 14, lineHeight: 22, paddingHorizontal: 20, marginBottom: 30 },
  checkDetailsBtn: { flexDirection: 'row', alignItems: 'center' },
  checkDetailsText: { color: '#5B66F9', fontWeight: 'bold', fontSize: 16 },
  downloadButton: { backgroundColor: '#5B66F9', height: 60, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  downloadButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },

  scanContainer: { flex: 1, backgroundColor: '#F8E9D2' }, 
  backButtonSafeArea: { position: 'absolute', top: 50, left: 20, zIndex: 10 },
  backButton: { width: 44, height: 44, backgroundColor: 'white', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  scannerFrame: { position: 'absolute', top: height * 0.25, alignSelf: 'center', width: width * 0.7, height: height * 0.4 },
  corner: { position: 'absolute', width: 40, height: 40, borderColor: 'white' },
  topLeft: { top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 16 },
  topRight: { top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 16 },
  bottomLeft: { bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 16 },
  bottomRight: { bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 16 },

  splashContainer: { flex: 1, backgroundColor: '#FEFAF6' }, // Nền hồng/cam nhạt
  splashContent: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  splashImage: { width: 300, height: 300, marginBottom: 40 },
  splashTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  splashDesc: { textAlign: 'center', fontSize: 14, color: '#6F7782', lineHeight: 22, marginBottom: 50 },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  dotInactive: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FAD4D4', marginHorizontal: 5 },
  dotActive: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#60A5FA', marginHorizontal: 5 },
});