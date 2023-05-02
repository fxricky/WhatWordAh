# How to deploy to App Store and Play Store

## Android

#### How to build the release AAB

1. Navigate to JDK bin folder
2. Use keytool command to generate keystore
3. Place the keystore under `android/app` directory
4. Add keystore related info into `android/gradle.properties`, such as keystore name, key alias, store password and key password
5. Add those info into signingConfigs & buildTypes in `android/app/build.gradle`, under `release` section
6. generate the Android App Bundle (AAB)
   1. `cd android`
   2. `./gradlew bundleRelease`

#### How to submit to Play Store

1. You will need a developer account in Google Play Store
2. Create a new application
3. Input all the related information
4. Need to prepare a Privacy Policy for the application
5. Upload the AAB file to Play Store for review
6. Wait for Google Play Store to review and it will be available in Play Store

## iOS

#### How to build and submit the release

1. Need to enable the App Transport Security
2. Configure the release scheme using XCode
3. Can build the release App from Product -> Build / run `yarn ios --mode Release`
4. After build & testing done, can archive the App
5. After archiving, then can Distribute the App
6. Select `App Store Connect` and `Upload`
7. Can choose the prefer method to sign the application
8. After clicking the upload, then soon will be available in **TestFlight**
9. Fill up all the necessary information and Submit for Review
