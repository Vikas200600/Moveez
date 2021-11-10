import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

function header({title,navigation}) {
    return (
        <div>
            <MaterialIcons name='menu' size={28} onPress={() => {}}/>
        </div>
    );
}

export default header;