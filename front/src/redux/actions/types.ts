/*
* In redux,  we don't really care about actually assigning a real string
* to this enum. The only requirement of a type in a redux action is that
* it must be some unique value. In theory, you don't a STRING, but in
* reality, it doesn't make a difference.
*
* registerUser it's by default 0
*
* */

export enum ActionTypes {
  registerUser = 'REGISTER_USER'
}
