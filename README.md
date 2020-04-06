# RNS Bug repro

In example_notworking.js, there is a [nested svg](https://github.com/carlevans719/react-native-svg-bug-repro/blob/master/example_notworking.js#L27), followed by a [group of text](https://github.com/carlevans719/react-native-svg-bug-repro/blob/master/example_notworking.js#L40). The text does not appear to render.

In example_working.js, the nested svg has been moved below the text group and both the text and the nested svg are now visible.

