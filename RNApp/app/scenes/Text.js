import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/PageStyle';

import {
    View,
    Text,
    Icon,
    Badge,
    ContainerWithMenu,
    Navbar,
    Content,
    List,
    ListItem,
    ScrollView,
} from '../components';

class TextPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);

        const left = {
            role: "back",
            onPress: Actions.pop
        };

        const right = {
            role: "menu",
            onPress: this.props.openSideMenu
        };

        return (
            <ContainerWithMenu>
                <Navbar title={this.props.title} left={left} right={right} user={this.props.user} />
                <View style={styles.content}>
                    <ScrollView>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, fugiat iusto libero officiis quas quis quos saepe! Ab eos error facere in, odit provident, rem rerum saepe similique ullam voluptatem?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam cumque delectus doloremque eaque eligendi facilis hic ipsa ipsum labore non obcaecati perferendis reiciendis rem, voluptatibus? Eveniet fugit iusto totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur labore maxime odit soluta voluptas! Atque esse quam qui tempora ullam? Accusantium corporis dicta dolores fugit id ipsa, quod temporibus ut.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus enim eos esse eveniet ex in itaque nulla, numquam perferendis quae quaerat, qui ullam! Accusamus autem dolorum esse molestias pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum dolores earum error esse exercitationem, laboriosam modi molestiae mollitia neque officiis quisquam, reiciendis rerum temporibus tenetur totam ullam voluptate voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem, ea eos explicabo fugit illo modi nulla quis ratione repellat sed, temporibus velit veniam. Atque eligendi facilis pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsa iusto maxime molestiae officia perspiciatis possimus sapiente voluptatem. Aspernatur deserunt error fuga iste labore maxime nesciunt suscipit, veniam? Architecto, minima?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur eaque exercitationem explicabo necessitatibus possimus quibusdam rem repellendus sit voluptatibus? Accusantium aut, consequatur cupiditate eveniet fugit omnis quod recusandae sequi!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam cupiditate, delectus dicta hic inventore ipsa maiores mollitia obcaecati officia quam similique. Consequuntur itaque laudantium veniam! Nisi, reiciendis repellendus!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur culpa, cupiditate dicta inventore ipsum iure nisi nobis perferendis quae quam, quos repudiandae rerum sit unde vel voluptate voluptates.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi dignissimos nihil nisi perferendis, recusandae sit. Aliquam consectetur error explicabo facere illum incidunt iure, molestiae praesentium quod ratione repellendus sed!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, autem, tempora. Adipisci deleniti fuga fugiat impedit laudantium minus nostrum pariatur quam quasi quibusdam? Corporis error fuga molestiae perspiciatis quam sequi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta in iusto rem similique. Ab dolorum laborum possimus provident! Adipisci debitis deleniti est eveniet fugit in magnam nihil repellat velit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam culpa dolorem, esse facere ipsum laboriosam modi numquam, odio officia quo rem sint sunt unde, vero? Ab deserunt fugit magni.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores assumenda distinctio, eaque esse facere iusto modi numquam porro quas quo ratione, recusandae rem? Aliquid dolor fugit in tempore vero.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa dolorem enim incidunt maiores maxime, perferendis repellendus ut veniam voluptate. Amet ducimus explicabo libero. Et fugit nemo non ratione sit!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam autem culpa cum, dicta dolorum eum eveniet fugit harum iste libero minima odit omnis praesentium ratione reprehenderit saepe sunt!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores blanditiis commodi consectetur corporis ducimus earum exercitationem illo ipsum, libero, numquam officiis optio possimus, quos sequi suscipit ullam veritatis vitae.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum fuga vero! Repellat, sed, veniam! Accusamus aut, corporis debitis delectus inventore maiores maxime numquam obcaecati quibusdam, recusandae, tenetur ut voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid beatae cumque, dignissimos earum excepturi illum inventore libero magnam molestias, neque numquam, provident quod quos sit temporibus tenetur! Ut?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis deleniti, dolorem facere illo laborum magni odit quam quibusdam rem reprehenderit tenetur totam veritatis? Architecto consectetur error iusto reprehenderit unde!
                        </Text>
                    </ScrollView>
                </View>
            </ContainerWithMenu>
        );
    }
}

export default TextPage;