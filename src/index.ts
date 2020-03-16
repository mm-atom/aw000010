/**
 * 设置全局存储
 * @param key 键
 * @param value 值
 */
export default function set(key: string, value: unknown) {
	sessionStorage.setItem(key, JSON.stringify(value));
}
