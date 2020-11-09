import React from 'react'
import { Modal } from 'react-native'
import { AppText } from './AppText'
import { Block } from './Block'
import { Button } from './Button';


export default function AppModal({ showTerms, setShowTerms }) {
    console.log(showTerms);
    return (
        <Modal animationType="slide" visible={showTerms}>
          <Block 
            style={{flex:1}}
          >
            <AppText>Terms of Service</AppText>
            <Button gradient onPress={() => setShowTerms(false)}>

            </Button>
          </Block>
        </Modal>
      )
}
