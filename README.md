# React Native EV-Charging App
Application based on fake data where you can easily access the list of charging stations via location-based map

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Kullanılan Teknolojiler

* Expo CLI/EAS
* React Native
* Clerk Authentication with Google
* Google Maps
* React-Navigation v6
* Redux Toolkit
* Custom Font
* Secure Store

## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/burakgokcinarr/react-native-ev-charging-app.git
```

Proje dizinine gidin

```bash
  cd app-project
```

Gerekli paketleri yükleyin

```bash
  npm install or yarn install or bun install
```
Proje Yapılandırılması ( ÖNEMLİ )

```bash
 Adım 1) https://clerk.com adresinden hesap oluşturun ve Burada yeni bir proje oluşturun.
 Adım 2) proje ana dizinine ".env" isimli bir dosya oluşturun ve aşağıdaki uygun yerleri clerk hesabınızdan oluşturduğunuz proje üzerindeki API KEY ile değiştirin.
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx.....xxxxxxxxx
NOT: İsterseniz başka bir ad ile oluşturup proje içerisinde kullanılan yeri düzenleyebilirsiniz.
```

Cihazlarda çalıştırın ( iOS Simulator & Android Emulator or Real Devices )

```bash
  npx expo start
```
```bash
  for iOS           => Press Keyboard (i)
  for Android       => Press Keyboard (a)
  or
  Your Real Device  => Expo App Scan QRCode
```

NOT: Ayarları doğru bir şekilde uyguladıysanız artık https://dashboard.clerk.com adresi üzerinden User sekmesi üzerinden kullanıcı giriş durumlarını takip edebilirsiniz.

<p align="center">
  <img src="https://github.com/burakgokcinarr/react-native-ev-charging-app/blob/main/app.gif" alt="img" width="450" height="700">
</p>
