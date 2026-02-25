// api/register.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  // 这里添加你的注册逻辑
  // 例如：验证数据、存储到数据库等
  try {
    // 示例：简单的验证
    if (!username || !email || !password) {
      return res.status(400).json({ message: '请填写所有字段' });
    }

    // 这里可以添加数据库操作
    // const user = await createUser(username, email, password);

    return res.status(200).json({ message: '注册成功' });
  } catch (error) {
    return res.status(500).json({ message: '服务器错误' });
  }
}
