export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    // 这里添加登录验证逻辑
    // 例如：验证邮箱和密码是否匹配
    if (!email || !password) {
      return res.status(400).json({ message: '请填写所有字段' });
    }

    // 示例：模拟用户验证
    // 实际应用中应查询数据库
    const validUser = await validateUser(email, password);
    
    if (validUser) {
      // 生成 JWT token
      const token = generateToken(validUser);
      return res.status(200).json({ 
        message: '登录成功',
        token: token,
        user: { id: validUser.id, email: validUser.email }
      });
    } else {
      return res.status(401).json({ message: '邮箱或密码错误' });
    }
  } catch (error) {
    return res.status(500).json({ message: '服务器错误' });
  }
}

// 模拟用户验证函数
async function validateUser(email, password) {
  // 实际应用中应查询数据库
  // 这里只是示例
  return { id: 1, email: email };
}

// 模拟 token 生成函数
function generateToken(user) {
  // 实际应用中应使用 JWT 库
  return 'fake-jwt-token-' + user.id;
}
