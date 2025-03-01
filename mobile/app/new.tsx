import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Link } from 'expo-router'

import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function Memories() {
  const [isPublic, setIsPublic] = useState(false)
  const { bottom, top } = useSafeAreaInsets()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 px-8"
        style={{ paddingBottom: bottom, paddingTop: top }}
      >
        <View className="mt-4 flex-row items-center justify-between">
          <NLWLogo />
          <Link href="/memories" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
              <Icon name="arrow-left" size={16} color="#FFF" />
            </TouchableOpacity>
          </Link>
        </View>
        <View className="mt-6 space-y-6">
          <View className="flex-row items-center gap-2">
            <Switch
              value={isPublic}
              onValueChange={setIsPublic}
              trackColor={{ false: '#767577', true: '#372560' }}
              thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
            />
            <Text className="font-body text-base text-gray-200">
              Tornar memória pública
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-32 justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
          >
            <View className="flex-row items-center justify-center gap-2">
              <Icon name="image" color="#FFF" />
              <Text className="font-body text-sm text-gray-200">
                Adicionar foto ou vídeo de capa
              </Text>
            </View>
          </TouchableOpacity>
          <ScrollView className="h-1/2">
            <TextInput
              multiline
              className="p-0 font-body text-lg text-gray-50"
              placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre"
              placeholderTextColor="#56565a"
            />
          </ScrollView>

          <TouchableOpacity className="items-center self-end rounded-full bg-green-500 px-5 py-5">
            <Text className="font-alt text-sm uppercase text-black">
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
