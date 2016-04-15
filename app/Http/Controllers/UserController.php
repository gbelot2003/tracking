<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
        $this->middleware('TraderCheckPerms');
    }

    public function index()
    {
        $users = User::select('email', 'name')->limit(5)->get();

        return $users;
    }

}
