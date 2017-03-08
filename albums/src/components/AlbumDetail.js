import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { cardHead,
            cardHeadItem,
            cardHeadTitle, 
            thumbnailWrap,
            thumbnail,
            imageStyle } 
    = styles;

    return (
        <Card>
            <CardSection style={cardHead}>
                <View style={thumbnailWrap}>
                    <Image
                        style={thumbnail}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={cardHeadItem}>
                    <Text style={cardHeadTitle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy this album
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardHead: {
        borderBottomWidth: 1,
        borderColor: '#0000001E'
    },
    cardHeadItem: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cardHeadTitle: {
        color: '#000000DE'
    },
    thumbnail: {
        height: 40,
        width: 40
    },
    thumbnailWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 16,
        borderRadius: 20
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
