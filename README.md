# vrchat-client
> Unofficial VRChat API Client for Node.js

## Usage
### Getting started
```javascript
import vrc from 'vrchat-client'

// all methods return Promise
let api = await vrc.login(username, password)

```

### User API
- User info
```javascript
api.user.getInfo()
```

- Update user info
```javascript
api.user.updateInfo({
  email: "example@example.com",
  birthday: "",
  status: "active",
  statusDescription: "comment"
})
```

- Get friends list
```javascript
api.user.getFriends({
  offset: 1,
  n: 1,
  offline: false,
})
```

- get friend status
```javascript
api.user.getFriendStatus('user id')
```

- Send friend request
```javascript
api.user.sendFrinedRequest('user id')
```

- Unfriend
```javascript
api.user.unfriend('user id')
```

- Accept friend request
```javascript
api.user.acceptFriend('notification id')
```

- Get user by ID
```javascript
api.user.getById('user id')
```

- Get user by name
```javascript
api.user.getByName('user name')
```

- Get user list
```javascript
api.user.search({
  search: '',
  n: 1,
  offset: 1,
  developerType: 'none'
})
```

### Favorite API
- Add Favorite
```javascript
api.favorite.add('type', 'object id')
// ?
api.favorite.add.avatar('avatar id')
api.favorite.add.world('world id')
api.favorite.add.user('user id')
```

- Get favorite
```javascript
api.favorite.get('favorite id')
```

- List Favorite
```javascript
api.favorite.list('type')
```

- Delete  favorite
```javascript
api.favortite.delete('favorite id')
```

### World API
- Get by id
```javascript
api.world.getById('world id')
```

- List worlds
```javascript
api.world.list({
  options: any
})
```

- Delete world
```javascript
api.world.delete('world id')
```

- Get world meta data
```javascript
api.world.getMetaData('world id')
```

- Get instance with tags
```javascript
api.world.getInstanceWithTags('world id', 'instance id')
```

### Avatar API
- Get by ID
```javascript
api.avatar.getById('avatar id')
```

- Choose avatar
```javascript
api.avatar.choose('avatar id')
```

- List avatar
```javascript
api.avatar.list({
  options: any,
})
```

### Moderation API
- Send moderation
```javascript
api.moderation.send('user id')
```

- Send player moderation
```javascript
// Block user
api.moderation.block('user id')
// Unblock user
api.moderation.unblock('user id')
// Mute user
api.moderation.mute('user id')
// Unmute
api.moderation.unmute('user id')
```

- Delete moderation
```javascript
api.moderation.delete('moderation id')
```

- Clear all moderation
```javascript
api.moderation.clear('user id')
```

- Get against
```javascript
api.moderation.getAgainst()
```

- Get player's
```javascript
api.moderation.getPlayer()
```

### Notification API
- Send notification
```javascript
api.notification.send('type', {
  message: "",
  details: {}
})
```

- Mark as read
```javascript
api.notification.markAsRead('notification id')
```

- Delete notification
```javascript
api.notification.delete('notification id')
```

- Get all notification
```javascript
api.notification.getAll({
  type: 'type',
  send: true,
  after: 'date',
})
```
