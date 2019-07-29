<?php

namespace App\Http\Controllers;
use App\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function create() {

        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    public function store() {

        $this->validate(request(), [
            'name'        => 'required|min: 5',
            'description' => 'required'
        ]);

        Project::forceCreate([
            'name'        => request('name'),
            'description' => request('description')
        ]);

        return ['message' => 'Projeto Criado'];

    }
}
