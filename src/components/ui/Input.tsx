import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Row, Stack } from '../layout';
import { Text } from './Text';

// ================================
// Components
// ================================

interface Props extends TextInputProps {
  label?: string;
  errorMessage?: string;
  className?: string;
}

/**
 * Input 컴포넌트
 * @param state Input 상태를 설정합니다.
 * @param label Input label을 추가합니다.
 */
export const Input = forwardRef<TextInput, Props>(
  (
    { label, errorMessage, className = '', onChangeText, value, secureTextEntry, ...props },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const handleClear = () => {
      onChangeText?.('');
      inputRef.current?.clear();
    };

    return (
      <Stack gap="s">
        <View
          className={`p-spacing-6 w-full gap-spacing-1 rounded-radius-2 bg-neutral-700 ${focused ? 'border-2 border-primary-500' : 'p-spacing-6 border-2 border-transparent'} ${errorMessage && 'border-2 border-utility-error-primary'}`}
        >
          {label && (
            <Text variant="base-caption" weight="medium" color="secondary">
              {label}
            </Text>
          )}
          <Row gap="s">
            <TextInput
              ref={inputRef}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholderTextColor="#C9CDD6"
              secureTextEntry={secureTextEntry && !showPassword}
              className={`
                flex-1 text-lg text-white
                ${className}
              `}
              {...props}
            />
          </Row>
        </View>
        {errorMessage && (
          <Text variant="base-small" style={{ color: '#FF4D4F' }}>
            {' '}
            {errorMessage}{' '}
          </Text>
        )}
      </Stack>
    );
  },
);
